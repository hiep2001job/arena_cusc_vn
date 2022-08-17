const apispreadsheets = '1M1uaegvEMvVCZIcmcMFtse0rdX2sSfXguisvMBOpyss';

// Translate Google Drive link to streamable link
const imgFromDriveUrl=(url)=> url.replace('file/d/','uc?export=view&id=').replace('/view?usp=sharing','');

export default {apispreadsheets,imgFromDriveUrl};
