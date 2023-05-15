import { createClient, ClientSettings } from '../index';

test('Create Client', () => {
  const settings = new ClientSettings();
  const client = createClient(settings);

  expect(client).not.toBeNull();
});
