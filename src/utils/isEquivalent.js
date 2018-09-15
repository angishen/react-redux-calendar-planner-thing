export default function isEquivalent(a, b){
  const aProps = Object.getOwnPropertyNames(a).filter(prop => prop !== undefined);
  const bProps = Object.getOwnPropertyNames(b).filter(prop => prop !== undefined);

  console.log(aProps);
  console.log(bProps);

  if (aProps.length !== bProps.length ){
    return false;
  }

  for (let i = 0; i < a.Props.length; i++) {
    let propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}