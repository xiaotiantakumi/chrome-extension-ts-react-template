import React from "react";

export type MyType ={
    name: string;
    age : number;
}

export class Sample extends React.Component<MyType> {
  render() {
    return (
        <>
        <p>名前：{this.props.name}</p>
        <p>年齢:{this.props.age}歳</p>
        </>
    )
  }
}