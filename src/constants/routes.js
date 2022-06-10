// ####################### ADMIN ROUTES

const role = "role";
const permission = "permission";
const admin = "admin";

// --------------------------Request Route Admin--------------------------

// role
const create_role = "create-role";
const update_role = "update-role";
const get_all_role = "get-all";
const get_one_role = "get-one";
const delete_role = "delete";

// permission
const create_permission = "create-permission";
const update_permission = "update-permission";
const get_all_permission = "get-all";
const get_one_permission = "get-one";
const delete_permission = "delete";

// admin
const create_admin = "create-admin";
const login_admin = "login-admin";
const update_admin = "update-admin";
const update_password_admin = "update-password";
const get_all_admin = "get-all";
const get_one_admin = "get-one";
const check_admin = "check-admin";
const count_admin = "count-admin";
const delete_admin = "delete";

// ####################### COMPANY ROUTES

const company = "company";
const document_company = "document";

// --------------------------Request Route Company--------------------------

// company
const create_company = "create-company";
const login_company = "login-company";
const update_company = "update-company";
const update_password_company = "update-password";
const get_all_company = "get-all";
const get_one_company = "get-one";
const check_company = "check-company";
const count_company = "count-company";
const delete_company = "delete";

//document
const create_document_company = "create-document";
const update_document_company = "update-document";
const get_all_document_company = "get-all";
const get_one_document_company = "get-one";
const delete_document_company = "delete";

// ####################### DRIVER ROUTES

const driver = "driver";
const document_driver = "document";
const vehicule = "vehicule";
const category = "category";

// --------------------------Request Route Driver--------------------------

// driver
const create_driver = "create-driver";
const login_driver = "login-driver";
const update_driver = "update-driver";
const update_password_driver = "update-password";
const get_all_driver = "get-all";
const get_one_driver = "get-one";
const check_driver = "check-driver";
const count_driver = "count-driver";
const delete_driver = "delete";

//document
const create_document_driver = "create-document";
const update_document_driver = "update-document";
const get_all_document_driver = "get-all";
const get_one_document_driver = "get-one";
const delete_document_driver = "delete";

// vehicule
const create_vehicule = "create-vehicule";
const update_vehicule = "update-vehicule";
const get_all_vehicule = "get-all";
const get_one_vehicule = "get-one";
const count_vehicule = "count-vehicule";
const delete_vehicule = "delete";

// Category
const create_category = "create-category";
const update_category = "update-category";
const get_all_category = "get-all";
const get_one_category = "get-one";
const delete_category = "delete";

// ####################### NOTIFICATION ROUTES

const ads = "ads";
const notification = "notification";
const push = "push";
const mailing = "mailing";

// --------------------------Request Route Notification--------------------------

// ad
const create_ads = "create-ad";
const update_ads = "update-ad";
const get_all_ads = "get-all";
const get_one_ads = "get-one";
const get_actif_ads = "get-actif";
const count_ads = "count-ad";
const delete_ads = "delete";

//mailing
const send_sms = "send-sms";
const send_mail = "send-mail";

//push
const send_push = "send-push";
const create_push = "create-push";
const update_push = "update-push";
const get_all_push = "get-all";
const get_one_push = "get-one";
const count_push = "count-push";
const delete_push = "delete";

//notification
const create_notification = "create-notification";
const update_notification = "update-notification";
const get_all_notification = "get-all";
const get_one_notification = "get-one";
const get_entity_notification = "get-entity";
const count_notification = "count-notification";
const delete_notification = "delete";

// ####################### PROMO ROUTES

const discount = "discount";
const wallet = "wallet";

// --------------------------Request Route Promo--------------------------

//discount
const create_discount = "create-code";
const update_discount = "update-code";
const reduce_discount = "reduce-use";
const get_all_discount = "get-all";
const get_one_discount = "get-one";
const get_actif_discount = "get-actif";
const delete_discount = "delete";

//wallet
const create_wallet = "create-code";
const update_wallet = "update-code";
const disable_wallet = "disable-use";
const get_all_wallet = "get-all";
const get_one_wallet = "get-one";
const get_actif_wallet = "get-actif";
const delete_wallet = "delete";

// ####################### SETTING ROUTES

const global = "global";
const location = "location";
const reason = "reason";
const ride = "ride";
const social = "social";

// --------------------------Request Route Setting--------------------------

//global
const create_global = "create-global";
const update_global = "update-global";
const get_all_global = "get-all";
const get_one_global = "get-one";
const get_one_by_country = "get-one-by-country";
const delete_global = "delete";

//location
const create_location = "create-location";
const update_location = "update-location";
const get_all_location = "get-all";
const get_one_location = "get-one";
const delete_location = "delete";

//reason
const create_reason = "create-reason";
const update_reason = "update-reason";
const get_all_reason = "get-all";
const get_one_reason = "get-one";
const delete_reason = "delete";

//ride
const create_ride = "create-ride";
const update_ride = "update-ride";
const get_all_ride = "get-all";
const get_one_ride = "get-one";
const delete_ride = "delete";

//social
const create_social = "create-social";
const update_social = "update-social";
const get_all_social = "get-all";
const get_one_social = "get-one";
const delete_social = "delete";

// ####################### TRIP ROUTES

const trip = "trip";
const rent = "rent";
const chat = "chat";
const review = "review";

// --------------------------Request Route Trip--------------------------

//trip
const create_trip = "create-trip";
const update_trip = "update-trip";
const update_rider_trip = "update-rider";
const update_driver_trip = "update-driver";
const update_travel_current_trip = "update-travel-current";
const update_travel_end_trip = "update-travel-end";
const get_all_trip = "get-all";
const get_one_trip = "get-one";
const get_one_user_driver_trip = "get-one-user-driver";
const count_trip = "count-trip";
const delete_trip = "delete";

//rent
const create_rent = "create-rent";
const update_rent = "update-rent";
const update_rider_rent = "update-rider";
const update_driver_rent = "update-driver";
const get_all_rent = "get-all";
const get_one_rent = "get-one";
const get_one_user_driver_rent = "get-one-user-driver";
const count_rent = "count-rent";
const delete_rent = "delete";

//chat
const create_chat = "create-chat";
const update_chat = "update-chat";
const push_message = "push-message";
const get_all_chat = "get-all";
const get_one_chat = "get-one";
const delete_chat = "delete";

//review
const create_review = "create-review";
const update_review = "update-review";
const get_all_review = "get-all";
const get_one_review = "get-one";
const delete_review = "delete";

// ####################### UPLOAD ROUTES

const upload = "upload";

// --------------------------Request Route Upload--------------------------

//upload
const create_upload_web = "create-url-web";
const create_upload_mobile = "create-url-mobile";
const delete_upload = "delete";

// ####################### USER ROUTES

const user = "user";

// --------------------------Request Route User--------------------------

//user
const create_user = "create-user";
const login_user = "login-user";
const login_path_user = "login-path-user";
const update_user = "update-user";
const update_password_user = "update-password";
const get_all_user = "get-all";
const get_one_user = "get-one";
const check_user = "check-user";
const count_user = "count-user";
const delete_user = "delete";

// ####################### VEHICULE ROUTES

const brand = "brand";
const model = "model";

// --------------------------Request Route User--------------------------

//Brand
const create_brand = "create-brand";
const update_brand = "update-brand";
const get_all_brand = "get-all";
const get_one_brand = "get-one";
const delete_brand = "delete";

//model
const create_model = "create-model";
const update_model = "update-model";
const get_all_model = "get-all";
const get_one_model = "get-one";
const delete_model = "delete";

// ####################### COUNTRY ROUTES

const country = "country";

// --------------------------Request Route Zone--------------------------

//country
const create_country = "create-country";
const update_country = "update-country";
const get_all_country = "get-all";
const get_one_country = "get-one";
const delete_country = "delete";

export {
  // --------------------------Request Admin--------------------------
  admin,
  create_admin,
  login_admin,
  update_admin,
  update_password_admin,
  get_all_admin,
  get_one_admin,
  count_admin,
  check_admin,
  delete_admin,
  // --------------------------Request Role--------------------------
  role,
  create_role,
  update_role,
  get_all_role,
  get_one_role,
  delete_role,
  // --------------------------Request Permission--------------------------
  permission,
  create_permission,
  update_permission,
  get_all_permission,
  get_one_permission,
  delete_permission,
  // --------------------------Request Zone--------------------------
  country,
  create_country,
  update_country,
  get_all_country,
  get_one_country,
  delete_country,
  // --------------------------Request Brand--------------------------
  brand,
  create_brand,
  update_brand,
  get_all_brand,
  get_one_brand,
  delete_brand,
  // --------------------------Request Model--------------------------
  model,
  create_model,
  update_model,
  get_all_model,
  get_one_model,
  delete_model,
  // --------------------------Request User--------------------------
  user,
  create_user,
  login_user,
  login_path_user,
  update_user,
  update_password_user,
  get_all_user,
  get_one_user,
  check_user,
  count_user,
  delete_user,
  // --------------------------Request Location--------------------------
  location,
  create_location,
  update_location,
  get_all_location,
  get_one_location,
  delete_location,
  // --------------------------Request Reason--------------------------
  reason,
  create_reason,
  update_reason,
  get_all_reason,
  get_one_reason,
  delete_reason,
  // --------------------------Request Ride--------------------------
  ride,
  create_ride,
  update_ride,
  get_all_ride,
  get_one_ride,
  delete_ride,
  // --------------------------Request Social--------------------------
  social,
  create_social,
  update_social,
  get_all_social,
  get_one_social,
  delete_social,
  // --------------------------Request Trip--------------------------
  trip,
  create_trip,
  update_trip,
  update_rider_trip,
  update_driver_trip,
  update_travel_current_trip,
  update_travel_end_trip,
  get_all_trip,
  get_one_trip,
  get_one_user_driver_trip,
  count_trip,
  delete_trip,
  // --------------------------Request Rent--------------------------
  rent,
  create_rent,
  update_rent,
  update_rider_rent,
  update_driver_rent,
  get_all_rent,
  get_one_rent,
  get_one_user_driver_rent,
  count_rent,
  delete_rent,
  // --------------------------Request Chat--------------------------
  chat,
  create_chat,
  update_chat,
  push_message,
  get_all_chat,
  get_one_chat,
  delete_chat,
  // --------------------------Request Review--------------------------
  review,
  create_review,
  update_review,
  get_all_review,
  get_one_review,
  delete_review,
  // --------------------------Request Upload--------------------------
  upload,
  create_upload_web,
  create_upload_mobile,
  delete_upload,
  // --------------------------Request Company--------------------------
  company,
  create_company,
  login_company,
  update_company,
  update_password_company,
  get_all_company,
  get_one_company,
  check_company,
  count_company,
  delete_company,
  // --------------------------Request Discount--------------------------
  discount,
  create_discount,
  update_discount,
  reduce_discount,
  get_all_discount,
  get_one_discount,
  get_actif_discount,
  delete_discount,
  // --------------------------Request Wallet--------------------------
  wallet,
  create_wallet,
  update_wallet,
  disable_wallet,
  get_all_wallet,
  get_one_wallet,
  get_actif_wallet,
  delete_wallet,
  // --------------------------Request Global--------------------------
  global,
  create_global,
  update_global,
  get_all_global,
  get_one_global,
  get_one_by_country,
  delete_global,
  // --------------------------Request Notification--------------------------
  notification,
  create_notification,
  update_notification,
  get_all_notification,
  get_one_notification,
  get_entity_notification,
  count_notification,
  delete_notification,
  // --------------------------Request Push--------------------------
  push,
  send_push,
  create_push,
  update_push,
  get_all_push,
  get_one_push,
  delete_push,
  count_push,
  // --------------------------Request Mailing--------------------------
  mailing,
  send_mail,
  send_sms,
  // --------------------------Request Ads--------------------------
  ads,
  create_ads,
  update_ads,
  get_all_ads,
  get_one_ads,
  get_actif_ads,
  delete_ads,
  count_ads,
  // --------------------------Request Vehicule--------------------------
  vehicule,
  create_vehicule,
  update_vehicule,
  get_all_vehicule,
  get_one_vehicule,
  delete_vehicule,
  count_vehicule,
  // --------------------------Request Document_driver--------------------------
  document_driver,
  create_document_driver,
  update_document_driver,
  get_all_document_driver,
  get_one_document_driver,
  delete_document_driver,
  // --------------------------Request Driver--------------------------
  driver,
  create_driver,
  login_driver,
  update_driver,
  update_password_driver,
  get_all_driver,
  get_one_driver,
  check_driver,
  count_driver,
  delete_driver,
  // --------------------------Request Document_company--------------------------
  document_company,
  create_document_company,
  update_document_company,
  get_all_document_company,
  get_one_document_company,
  delete_document_company,
  // --------------------------Request Category Driver--------------------------
  category,
  create_category,
  update_category,
  get_all_category,
  get_one_category,
  delete_category
};
