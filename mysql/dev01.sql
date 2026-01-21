show databases;

use dev;

-- 테이블 생성
create table customers(
	id int not null auto_increment,
    name varchar(45) not null,
    email varchar(45) not null,
    phone varchar(45) null,
    address varchar(100) null,
    primary key(id)
);

select *
from customers;

-- 홍길동, hong@email.com, 010-1234-5678
insert into customers (name,email,phone)
values ('홍길동','hong@email.com','010-1234-5678');

update customers
set address = "대구 중구"
where id = 3;

delete from customers
where id >10;