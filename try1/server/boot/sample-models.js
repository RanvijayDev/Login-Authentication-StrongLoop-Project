module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var Department=app.models.department;
  var RoleMapping = app.models.RoleMapping;


  User.create([
    {username: 'Kapil', email: 'kapstav@gmail.com', password: 'bluepapercup'},
    {username: 'Nitin', email: 'nitin@gmail.com', password: 'bluepapercup'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);





    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });

    //create the employee role
    Role.create({
      name: 'employee'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });

  Department.create({
    DepartmentName:'IT',
    NumberOfEmployee:20
  }, function(err, department) {
    if (err) throw err;

    console.log('Created project:', department);
  });

};
