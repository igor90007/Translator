describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have main screen', async () => {
    await expect(element(by.id('main'))).toBeVisible()
  })

  it('should translate text', async () => {
    await element(by.id('sourceInput')).typeText('end-to-end test')
    await element(by.id('translateButton')).tap()
  })

  it('should rotate languages', async () => {
    await element(by.id('doShakeLanguages')).tap()
    await element(by.id('translateButton')).tap()
  })

  it('should recognize a voice', async () => {
    await element(by.id('startRecognize')).tap()
    await element(by.id('stopVoiceRecognize')).tap()
  })
})
