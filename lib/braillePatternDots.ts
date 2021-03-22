const braille_info: { [brailleDotNumber: number]: string } = {
  0: "⠀",
  1: "⠁",
  12: "⠃",
  14: "⠉",
  145: "⠙",
  15: "⠑",
  124: "⠋",
  1245: "⠛",
  125: "⠓",
  24: "⠊",
  245: "⠚",
  4: "⠈",
  45: "⠘",
  3: "⠄",
  13: "⠅",
  123: "⠇",
  134: "⠍",
  1345: "⠝",
  135: "⠕",
  1234: "⠏",
  12345: "⠟",
  1235: "⠗",
  234: "⠎",
  2345: "⠞",
  34: "⠌",
  345: "⠜",
  36: "⠤",
  136: "⠥",
  1236: "⠧",
  1346: "⠭",
  13456: "⠽",
  1356: "⠵",
  12346: "⠯",
  123456: "⠿",
  12356: "⠷",
  2346: "⠮",
  23456: "⠾",
  346: "⠬",
  3456: "⠼",
  6: "⠠",
  16: "⠡",
  126: "⠣",
  146: "⠩",
  1456: "⠹",
  156: "⠱",
  1246: "⠫",
  12456: "⠻",
  1256: "⠳",
  246: "⠪",
  2456: "⠺",
  46: "⠨",
  456: "⠸",
  2: "⠂",
  23: "⠆",
  25: "⠒",
  256: "⠲",
  26: "⠢",
  235: "⠖",
  2356: "⠶",
  236: "⠦",
  35: "⠔",
  356: "⠴",
  5: "⠐",
  56: "⠰",
};

export interface Braille {
  readonly code: Array<boolean>;
  readonly char: string;
}

export function bchar(num: number): string {
  if (braille_info.hasOwnProperty(num)) {
    return braille_info[num];
  }
  return braille_info[0];
}

export function bcode(num: number): Array<boolean> {
  let s: string = num.toString();

  if (s.length > "123456".length) {
    return [false, false, false, false, false, false];
  }

  let result: Array<boolean> = [
    s.indexOf("1") !== -1 && s.indexOf("1") < "123456".length,
    s.indexOf("2") !== -1 && s.indexOf("1") < "123456".length,
    s.indexOf("3") !== -1 && s.indexOf("1") < "123456".length,
    s.indexOf("4") !== -1 && s.indexOf("1") < "123456".length,
    s.indexOf("5") !== -1 && s.indexOf("1") < "123456".length,
    s.indexOf("6") !== -1 && s.indexOf("1") < "123456".length,
  ];

  return result;
}

export function bpd(num: number): Braille {
  let b: Braille = { code: bcode(num), char: bchar(num) };
  return b;
}

export function bpds(...nums: Array<number>): Array<Braille> {
  let result: Array<Braille> = [];
  for (let num of nums) {
    result.push(bpd(num));
  }
  return result;
}

export default {
  bchar: bchar,
  bcode: bcode,
  bpd: bpd,
  bpds: bpds,
};
