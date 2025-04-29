import axios from 'axios';

// https://iocl.nanuconsultant.com/api/create-material.php
// https://iocl.nanuconsultant.com/api/get-material.php

const API_URL = 'https://iocl.nanuconsultant.com/api'; // your API base URL
const headers = { 
  "Content-Type": "application/x-www-form-urlencoded"
};

export const getData = async (url) => {
  const res = await axios.get(`${API_URL}${url}`, { headers });
  return res?.data;
};

export const postData = async (url, payload) => {
  console.log("Payload-=====>", payload, url)
  const res = await axios.post(`${API_URL}${url}`, payload);
  return res.data;
};

export const updateData = async (url, payload) => {
  const res = await axios.put(`${API_URL}${url}`, payload);
  return res.data;
};
