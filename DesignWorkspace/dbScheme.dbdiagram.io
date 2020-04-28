
Table users as U {
  id int [pk, increment] // auto-increment
  email string
  password string
  phone string
  full_name varchar
  addressId int
  userRole SetofUserRole
  created_at timestamp
  isEnabled bool
}

Table addresses {
  id int [pk, not null, unique]
  name varchar
  continent_name varchar
 }
 
Table userRoles {
  id int [pk]
  userRole string
 }
 
Table orders {
  id int [pk] // primary key
  user_id int [not null, unique]
  status varchar
  addressId int
  cart object[] [note: '{productId:1,quantity:3}']
  cargoFollow varchar
  
  created_at varchar [note: 'When order created'] // add column note
}

Table products {
  id int [pk]
  name varchar
  images array[] [note: 'Array of images']
  price int
  remaining int
  created_at datetime [default: `now()`]
}


Ref: "users".addressId < addresses.id  
Ref: "users"."id" < "orders"."id"
Ref: "orders"."cart" < "products"."id"
Ref: "orders"."addressId" > "addresses"."id"
Ref: "users"."userRole" > "userRoles"."id"