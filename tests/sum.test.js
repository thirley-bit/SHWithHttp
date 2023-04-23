// // // __tests__/sum-test.js
// // const sum = require('../sum');
// import sum from "src/sum";

// // eslint-disable-next-line no-undef
// test('测试sum', () => {
//   expect(sum(1,2)).toBe(3);
// });
// test("mockName and getMockName", () => {
//   const mockFn = jest.fn().mockName("Mock Function");
//   expect(mockFn.getMockName()).toBe("Mock Function")
// })

// test('mock.calls',() =>{
//   const mockFn = jest.fn();
//   mockFn(1,2);
//   mockFn(3,4)

//   expect(mockFn.mock.calls).toEqual([[1,2],[3,4]])
// })

// test('mock.reslt', () => {
//   const mockFn = jest.fn().mockImplementation(typeToReturn => {
//     if(typeToReturn === "ok"){
//       return 1
//     }
//     if(typeToReturn === "error"){
//       throw new Error('error')
//     }
//     if(typeToReturn === "incomplete"){
//       console.log(mockFn.mock.results[mockFn.mock.results.length - 1]. type)
//       expect(mockFn.mock.results[mockFn.mock.results.length - 1]. type).toBe(
//         'incomplete'
//       )
//       return 2
//     }
//   });
//   try{
//     mockFn('ok');
//     mockFn('incomplete');
//     mockFn('error');
//   } catch(error){

//   }
//   expect(mockFn.mock.results[0]).toEqual({type:'return', value: 1})
//   expect(mockFn.mock.results[1]).toEqual({type:'return', value: 2})

//   expect(mockFn.mock.results[2].type).toEqual('throw')
//   expect(mockFn.mock.results[2].value.message).toEqual('error')
// })

// test("mock.instances", () => {
//   const mockFn = jest.fn();

//   const a = new mockFn();
//   const b = new mockFn();

//   mockFn.mock.instances[0] === a; // true
//   mockFn.mock.instances[1] === b;
// })

// test('mockfn.mockClear', () => {
//   const mockFn = jest.fn().mockImplementation(() =>42)
//   const MockClass = jest.fn()

//   new MockClass()
//   expect(mockFn()).toBe(42)

//   expect(mockFn.mock.calls).toHaveLength(1)
//   expect(MockClass.mock.instances).toHaveLength(1)

//   mockFn.mockClear()
//   MockClass.mockClear()

//   new MockClass()
//   expect(mockFn()).toBe(42)

//   expect(mockFn.mock.calls).toHaveLength(1)
//   expect(MockClass.mock.instances).toHaveLength(1)
// })

// test.only('mockfn.mockReset', () => {
//   const mockFn = jest.fn().mockImplementation(() =>42)
//   const MockClass = jest.fn()

//   new MockClass()
//   expect(mockFn()).toBe(42)

//   expect(mockFn.mock.calls).toHaveLength(1)
//   expect(MockClass.mock.instances).toHaveLength(1)

//   mockFn.mockReset()
//   MockClass.mockReset()

//   new MockClass()
//   expect(mockFn()).toBeUndefined()

//   expect(mockFn.mock.calls).toHaveLength(1)
//   expect(MockClass.mock.instances).toHaveLength(1)
// })

// test('mockImplementationOnce', () => {
//   const mockFn = jest
//   .fn(() => "default")
//   .mockImplementationOnce(()=> 'first call')
//   .mockImplementationOnce(() => 'second call')


//   expect(mockFn()).toBe('first call')
//   expect(mockFn()).toBe('second call')
//   expect(mockFn()).toBe('default')
// })

// test('mockReturnValue', () => {
//   const mockFn = jest.fn().mockReturnValue(42)
//   expect(mockFn()).toBe(42)
// })

// test('mockReturnValueOnce', () => {
//   const mockFn = jest
//   .fn(() => "default")
//   .mockImplementationOnce(()=> 'first call')
//   .mockImplementationOnce(() => 'second call')


//   expect(mockFn()).toBe('first call')
//   expect(mockFn()).toBe('second call')
//   expect(mockFn()).toBe('default')
// })

test('mockResolveValue', async () => {
  const mockFn = jest.fn().mockResolvedValue(42)
  return expect(mockFn()).resolves.toBe(42)
})




// import axios from "axios";
// // jest.mock('axios')
// test('测试', async () => {
  // jest.mock('axios')

  // const response = {
  //   code:'200',
  //   msg:'ok',
  //   data: [
  //     {
  //       id: 1,
  //       label: "张三撒旦士大夫士大夫范德萨对方",
  //       value: "张三撒旦士大夫士大夫范德萨对方",
  //       status: 0,
  //       checked: false,
  //       img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  //     },
  //     {
  //       id: 2,
  //       label: "李四张",
  //       value: "李四",
  //       status: 0,
  //       checked: true,
  //       img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  //     },
  //   ]
  // }

  
// axios.get.mockResolvedValue(response)

//   const mockFn = jest.fn().mockResolvedValue(response)
//   return expect(mockFn().resolves.toBe(response))

// })


// axios.get.mockResolvedValue(response)
// jest.fn().mockImplementation(() => Promise.resolve(response))


// import axios from "axios";

// test('测试', () => {
//   // const mockFn = jest.fn()
//   // mockFn()
//   // expect(mockFn).toHaveBeenCalled()
// jest.mock('axios')

// const response = {
//   code:'200',
//   msg:'ok',
//   data: [
//     {
//       id: 1,
//       label: "张三撒旦士大夫士大夫范德萨对方",
//       value: "张三撒旦士大夫士大夫范德萨对方",
//       status: 0,
//       checked: false,
//       img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
//     },
//     {
//       id: 2,
//       label: "李四张",
//       value: "李四",
//       status: 0,
//       checked: true,
//       img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
//     },
//   ]
// }

// axios.get.mockResolvedValue(response)

// })

// import  fetchData  from "src/sum";

// test('mockResolveValue', async () => {
  
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   const mockFn = jest.fn().mockResolvedValue(resp)
//   console.log(users,resp,'user,resp')
//   return fetchData().then(data =>  expect(mockFn(data)).resolves.toEqual(users))
// })

// import Taro from "@tarojs/taro";

// // jest.mock("Taro");

// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   Taro.get.mockResolvedValue(resp)
//   console.log(users,'users')
//   console.log(resp,'resp')
//   return fetchData().then(data => expect(data).toEqual(users));
// });

// import  fetchData  from "src/sum";
// import axios from "axios";

// jest.mock("axios");

// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   axios.get.mockResolvedValue(resp)
//   console.log(users,'users')
//   console.log(resp,'resp')
//   return fetchData().then(data => expect(data).toEqual(users));
// });



// test("fetchData 测试", () => {
//   axios.get.mockResolvedValue({
//     data: "function(){return '123'})()",
//   });

//   return fetchData().then((data) => {
//     expect(eval(data)).toEqual("123");
//   });
// });
