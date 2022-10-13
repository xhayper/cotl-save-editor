import { useGtag } from "vue-gtag-next";
import {
  onCLS,
  onFID,
  onLCP,
  onTTFB,
  onFCP,
  type Metric,
} from "web-vitals";

const sendToAnalytics = (metric: Metric) => {
  const { event } = useGtag();

  let value = Math.floor(metric.delta);

  if (metric.name === "TTFB") {
    value = Math.floor(metric.delta - metric.entries[0].startTime);
  }

  event(metric.name, {
    event_category: "Web Vitals",
    event_label: metric.id,
    value,
  });
};

const webVitals = () => {
  try {
    onFID((metric) => sendToAnalytics(metric));
    onTTFB((metric) => sendToAnalytics(metric));
    onLCP((metric) => sendToAnalytics(metric));
    onCLS((metric) => sendToAnalytics(metric));
    onFCP((metric) => sendToAnalytics(metric));
  } catch (error) {
    console.error("[Analytics]", error);
  }
};

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.isReady().then(() => {
    router.beforeResolve(() => webVitals());
    router.afterEach(() => webVitals());
  });
});
