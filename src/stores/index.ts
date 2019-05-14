import GeneralStore from './domain/general'

export default () => {
  const General = new GeneralStore()

  return {
    General,
  }
}
