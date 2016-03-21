export default function Inject(injectable) {
  return function(prototype, method, argumentPosition) {
    prototype.$inject = prototype.$inject || [];
    prototype.$inject[argumentPosition] = injectable;
  };
}
