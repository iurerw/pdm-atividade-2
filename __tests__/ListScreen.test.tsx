import ListScreen from '../app/ListScreen';
import { render, waitFor } from '@testing-library/react-native';
import * as expoRouter from 'expo-router';

jest.spyOn(expoRouter, 'useLocalSearchParams').mockReturnValue({
  name: 'Alice',
  age: '1',
});

describe('<ListScreen />', () => {
  it('deve exibir apenas vacinas para idade menor ou igual a 1 mes', async () => {
    const { getByText, queryByText } = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText(/Baby Alice should take:/)).toBeTruthy();
      expect(getByText('Hepatite B (2a dose)')).toBeTruthy();
      expect(queryByText('HPV')).toBeNull(); 
    });
  });
});

