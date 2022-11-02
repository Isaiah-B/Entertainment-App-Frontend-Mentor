function useLocalStorageValue(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
}

export default useLocalStorageValue;
