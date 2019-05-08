import axios from 'axios'

export const getAuthenticatedData = async (url: string, apiMethod: string, data?: object) => {
  try {
    const result = await axios({
      data: data || {},
      method: apiMethod,
      url,
    })

    return result
  } catch (err) {
    return err
  }
}
