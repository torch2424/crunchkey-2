export function log(x: f32): f32 {
  return Mathf.log10(x);
}

export function ln(x: f32): f32 {
  return Mathf.log(x);
}

export function sqrt(x: f32): f32 {
  return Mathf.sqrt(x);
}

export function add(x: f32, y: f32): f32 {
  return x + y;
}

export function subtract(x: f32, y: f32): f32 {
  return x - y;
}

export function divide(x: f32, y: f32): f32 {
  return x / y;
}

export function multiply(x: f32, y: f32): f32 {
  return x * y;
}

export function pow(x: f32, y: f32): f32 {
  return Mathf.pow(x, y);
}

export function mod(x: f32, y: f32): f32 {
  return x % y;
}
