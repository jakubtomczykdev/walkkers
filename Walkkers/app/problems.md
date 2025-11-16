❌ 1. Błąd TS2322 w app/dashboard/index.tsx — href="/tasks" nie pasuje do typu
Dlaczego błąd powstaje?

Expo Router ściśle typuje ścieżki na podstawie folderów w /app.
Jeśli podasz ścieżkę, która nie jest poprawnie rozpoznana przez router, TypeScript ją odrzuci.

Jak to rozwiązać (słownie)?

Upewnij się, że ścieżka, którą wpisujesz w href, dokładnie odpowiada istniejącemu plikowi w /app.

Jeśli masz folder /app/tasks/index.tsx, to użyj ścieżki odpowiadającej temu plikowi.

Jeśli używasz parametrów, upewnij się, że mają poprawny format zgodny z Expo Router.

Jeśli chcesz przechodzić między ekranami w obrębie tej samej zakładki, używaj ścieżek względnych zgodnych z konwencją Expo.

❌ 2. Błędy TS7031 w app/tasks/index.tsx — brak typów (progress, title, reward, collected)
Dlaczego błąd powstaje?

Masz destrukturyzację propsów lub elementów listy, ale nie określiłeś ich typu, więc TypeScript nadaje im any, co jest niedopuszczalne w trybie strict.

Jak to rozwiązać (słownie)?

Zdefiniuj interfejs opisujący strukturę taska (np. jakie typy mają title, progress, itd.).

Oznacz dane wejściowe komponentu, aby TypeScript wiedział, jakie typy powinny mieć elementy.

Jeśli dane pochodzą z API lub z pliku, upewnij się, że masz zdefiniowany typ dla tych danych.

Jeśli iterujesz po tablicy tasków, oznacz jej typ, aby destrukturyzacja była poprawnie typowana.

❌ 3. Błędy TS7031 w components/BottomNavBar.tsx — brak typów (path, icon, label, isActive)
Dlaczego błąd powstaje?

Masz komponent (np. ikonki menu na dole), który przyjmuje propsy, ale nie zdefiniowałeś typu tych propsów, więc TypeScript traktuje je jako any.

Jak to rozwiązać (słownie)?

Zdefiniuj interfejs/typ dla elementu nawigacji, który określa:

co to jest path (np. string ścieżki używanej przez Expo Router),

co to jest icon (np. komponent ikony),

co to jest label (tekst),

co to jest isActive (boolean).

Oznacz komponent BottomNavBar tak, aby przyjmował propsy zgodne z tym typem.

Jeśli renderujesz listę elementów nawigacji, oznacz typ tej tablicy, aby destrukturyzacja była poprawnie typowana.