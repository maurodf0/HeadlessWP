export default function UseHomeView() {

  const isHomeView: Ref<boolean> = ref(false)

  const route = useRoute();
  if (route.path === '/') {
    isHomeView.value = true
  }
  return {
    isHomeView,
  };

}