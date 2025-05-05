export default function useHomeView() {
  const isFirstVisit = ref<Boolean>(false)
  const isReady = ref<Boolean>(false)
  const route = useRoute()

  if (process.client && route.path === '/') {
    const visited = sessionStorage.getItem('visited')
    if (!visited) {
      isFirstVisit.value = true
      sessionStorage.setItem('visited', 'true')
    }
    isReady.value = true
  } else {
    isReady.value = true
  }

  return { isFirstVisit, isReady }
}
