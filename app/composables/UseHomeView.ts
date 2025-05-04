export default function useHomeView() {

  const isHomeView = ref(false);

  const route = useRoute();
  if (route.path === '/') {
    isHomeView.value = true;
  }
  return {
    isHomeView,
  };

}