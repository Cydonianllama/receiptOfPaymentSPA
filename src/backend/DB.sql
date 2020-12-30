create LOOPBACK_STATE_RECEIPT(
    stateReceiptId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    stateName VARCHAR(20) NOT NULL
);

create table dataPayment(
    dataPaymentId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    IGVpercent FLOAT NOT NULL,
    EnergyCharge FLOAT NOT NULL,
    fixedCharge FLOAT NOT NULL
);

create table DataConsume(
    dataConsumeId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateData DATE NOT NULL,
    dataConsume FLOAT NOT NULL,
);

create table receipt(
    receiptId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    clientId INT NOT NULL,
    dataPaymentId INT NOT NULL,
    stateReceiptId INT NOT NULL,
    dateEmision DATE NOT NULL,
    dateExpiration DATE NOT NULL,
    foreign key(clientId) references clients(clientId),
    foreign key(dataPaymentId) references dataPayment(dataPaymentId),
    foreign key(stateReceiptId) references LOOPBACK_STATE_RECEIPT(stateReceiptId)
);

create table dataClient(
    dataClientId INT  PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(40) NOT NULL,
    DNI VARCHAR(12) NOT NULL,
    birtdate DATE NOT NULL
);

create table clients(
    clientId INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dataClientId INT NOT NULL,
    foreign key (dataClientId) references dataClient(dataClientId),
);

insert into LOOPBACK_STATE_RECEIPT(stateName) values('WAITING RECEIPT PAYMENT');
insert into LOOPBACK_STATE_RECEIPT(stateName) values('PAID RECEIPT');
insert into LOOPBACK_STATE_RECEIPT(stateName) values('UNPAID RECEIPT');
insert into LOOPBACK_STATE_RECEIPT(stateName) values('REVIEW RECEIPT');
