import baseUrl from './../Api/baseURL';

const useGetData = async (url, parms) => {

  const res = await baseUrl.get(url, parms);
  return res.data;
};

const useGetDataToken = async (url, parms) => {
  const config={
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
}


  const res = await baseUrl.get(url, config);
  return res.data;
};



export  {useGetData, useGetDataToken};
