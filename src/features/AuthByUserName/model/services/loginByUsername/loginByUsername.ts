import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18next from 'i18next';
import i18n from 'shared/config/I18n/I18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface IloginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
User,
IloginByUsername,
{ rejectValue: string }
>('login/fetchByIdStatus', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      i18n.t('Вы ввели неправильный логин или пароль'),
    );
  }
});
