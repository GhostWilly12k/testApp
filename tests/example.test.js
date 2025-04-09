const add = (a,b)=>{
    return a+b;
};

test('add 20 + 20 = 4',()=>{
    expect(add(20,20)).toBe(40);
})