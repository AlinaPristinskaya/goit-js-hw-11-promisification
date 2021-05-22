import './sass/main.scss';

/* const delay = ms => {
    return new Promise((resolve, reject) => {
         const time = ms ;  
        
            setTimeout(() => {
               if (time) {
                resolve(`Resolved after ${time}ms`);
              }
        
              reject('reject');
            }, ms);
       });
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms */


  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (callback) => {
    return new Promise((resolve, reject) => {
        const time = ms ;  
       
           setTimeout(() => {
              if (time) {
               resolve(`Resolved after ${time}ms`);
             }
       
             reject('reject');
           }, ms);
      });

    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);  
  
 