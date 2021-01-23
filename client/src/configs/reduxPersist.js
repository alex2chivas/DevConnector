import storage from 'redux-persist/lib/storage';

// TODO
// import {
// 	createFilter,
// 	createBlacklistFilter,
// } from 'redux-persist-transform-filter';

// export const saveSubsetBlacklistFilter = createFilter(
// 	'form.RegisterForm.registeredFields.password'
// );

export const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['form'],
	blacklist: ['auth'],
};
