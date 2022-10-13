import { useGtag } from "vue-gtag-next";
import {
  onFID,
  onTTFB,
  onLCP,
  onCLS,
  onFCP,
  type MetricWithAttribution,
  type CLSMetricWithAttribution,
  type FIDMetricWithAttribution,
  type LCPMetricWithAttribution,
  type TTFBMetricWithAttribution,
  type FCPMetricWithAttribution,
} from "web-vitals/attribution";

type AllMetricWithAttribution =
  | MetricWithAttribution
  | FIDMetricWithAttribution
  | TTFBMetricWithAttribution
  | LCPMetricWithAttribution
  | CLSMetricWithAttribution
  | FCPMetricWithAttribution;

const sendToAnalytics = (metric: AllMetricWithAttribution) => {
  const { event } = useGtag();

  const eventParams = {
    value: metric.delta,
    event_label: metric.id,
    event_category: "Web Vitals",

    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
    debug_target: undefined as string | undefined,
  };

  switch (metric.name) {
    case "FID":
      eventParams.debug_target = metric.attribution.eventTarget as string;
      break;
    case "LCP":
      eventParams.debug_target = metric.attribution.element as string;
      break;
    case "CLS":
      eventParams.debug_target = metric.attribution
        .largestShiftTarget as string;
      break;
  }

  if (process.env.NODE_ENV !== "production")
    console.log("[web-vitals.client.ts]", metric);

  event(metric.name, eventParams);
};

const webVitals = () => {
  try {
    onFID((metric) => sendToAnalytics(metric as FIDMetricWithAttribution));
    onTTFB((metric) => sendToAnalytics(metric as TTFBMetricWithAttribution));
    onLCP((metric) => sendToAnalytics(metric as LCPMetricWithAttribution));
    onCLS((metric) => sendToAnalytics(metric as CLSMetricWithAttribution));
    onFCP((metric) => sendToAnalytics(metric as FCPMetricWithAttribution));
  } catch (error) {
    console.error("[web-vitals.client.ts]", error);
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.afterEach(() => webVitals());
});
