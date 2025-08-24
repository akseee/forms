import { fileToBase64 } from './fileToBase64';

describe('fileToBase64', () => {
  test('should convert image file to base64 string', async () => {
    const imageData = Uint8Array.from([255, 216, 255]);
    const mockFile = new File([imageData], 'test.png', { type: 'image/png' });

    const result = await fileToBase64(mockFile);

    expect(result).toContain('data:image/png;base64,');
    expect(result).toContain(Buffer.from(imageData).toString('base64'));
  });
});
