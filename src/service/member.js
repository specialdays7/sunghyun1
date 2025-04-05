let data_set = [
    {id:"1",pwd :"1", name :"조로", addr :'시모치키마을'},
    {id:"2",pwd :"2", name:'루피', addr:'후사마을'},
    {id:"3",pwd :"3", name:'쵸파', addr:'사쿠라왕국'},
]
const getList = () => data_set
const register = (user) => {
    data_set = data_set.concat(user)
    return 1 
}

const getOne = (id) => {
    return data_set.find((data) => data.id === id);
  };

  const remove = (id) => {
    data_set = data_set.filter(data => data.id !== id);
    return 1;
  };
  const update = (user) => {
    data_set = data_set.map((data) =>
      data.id === user.id ? user : data
    );
    return 1;
  };

const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id ===  id)
    if(data.length !== 0){ 
        if(data[0].pwd === pwd){
            return 0 
        }else{
            return 1 
        }
    }else{
        return -1 
    }
}
export { register, getList, loginCheck, getOne, remove, update }
