
/**
 * Symuluje asynchroniczne sprawdzanie statusu autoryzacji.
 * W prawdziwej aplikacji odczytałoby to token np. z AsyncStorage.
 * Zwraca token lub null.
 */
export const checkAuthStatus = async (): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Symulacja: losowo zalogowany lub nie
      const hasToken = Math.random() > 0.5;
      console.log('API checkAuthStatus: User has token:', hasToken);
      resolve(hasToken ? 'dummy-token-123' : null);
    }, 1500); // Symuluj 1.5s ładowania
  });
};

export const loginApi = async (/* daneLogowania: LoginData */): Promise<{ token: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('API loginApi: Sukces, zwracam nowy token');
      const newToken = `fake-token-${Math.random()}`;
      resolve({ token: newToken });
    }, 1000); // Symuluj 1s opóźnienia sieciowego
  });
};