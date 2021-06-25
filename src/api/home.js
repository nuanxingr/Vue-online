import requestMock from '../utils/requestMock';

export const reqGetBanners=()=>{
  return requestMock({
    method:'GET',
    url:"/banners"
  })
}