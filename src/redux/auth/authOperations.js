import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      toast.info(
        'Упс, щось пішло не так...Перевірте, чи вірно ви вказали скриньку та створіть надійний пароль  - він має містити не меньше 6 та не більше 14 символів '
      );
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    toast.info(
      'Соррі, такого користувача у нас немає, перевірте, чи вірно ви ввели логін і пароль'
    );
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue();
  }
});
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState());

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      console.log(state);
      console.log(thunkAPI.rejectWithValue());
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error.response.status);
      error.response.status === 401
        ? toast.info(
            'Соррі,виникла помилка, спробуйте перезаважтажити сторінку'
          )
        : toast.info('Упс, щось пішло не так...Спробуйте ще раз');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
