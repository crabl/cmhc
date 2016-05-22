export default function cmhc(down_payment_percent, cap_at_twenty_percent=false) {
  // if down payment percent is greater than 20%, CMHC is optional
  if (cap_at_twenty_percent && down_payment_percent >= 0.20) {
    return 0;
  }

  if (down_payment_percent > 0.35) {
    return 0;
  } else if (down_payment_percent >= 0.35) {
    return 0.60 / 100
  } else if(down_payment_percent >= 0.25) {
    return 0.75 / 100
  } else if(down_payment_percent >= 0.20) {
    return 1.25 / 100
  } else if(down_payment_percent >= 0.15) {
    return 1.80 / 100
  } else if(down_payment_percent >= 0.10) {
    return 2.40 / 100
  } else if(down_payment_percent >= 0.05) {
    return 3.60 / 100
  } else {
    return 3.85 / 100;
  }
}
