import axios, { AxiosInstance } from 'axios';

const SERVER_ADDRESS = "http://localhost:8080/api";

export const axiosApi: AxiosInstance = axios.create({
    baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
    //   withCredentials: true
    // withCredentials: true,
    // headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost',
        // 'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers' : 'X-PINGOTHER, Content-Type',
        // 'Access-Control-Max-Age' : 86400
    // }
});
// Access-Control-Allow-Origin: http://localhost // ← 원래 있던 헤더

// Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS
// Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
// Access-Control-Max-Age: 86400


// 참고
// https://velog.io/@yiyb0603/React%EC%97%90%EC%84%9C-axios-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0