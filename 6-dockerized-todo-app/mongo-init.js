db.createUser(
    {
      user: "todouser",
      pwd: "todopwd",
      roles: [ "readWrite", "dbAdmin" ]
    }
  );  