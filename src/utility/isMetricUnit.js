export function isMetricUnit(obj, prop) {
  if (prop === 'majority') {
    const metricPropCount = Object.values(obj).reduce(
      (total, item) => (item === 'Metric' ? total + 1 : total),
      0,
    );

    return metricPropCount >= 2;
  }
  return obj[prop] === 'Metric';
}
