export enum Role {
  carry = "Carry",
  support = "Support",
  nuker = "Nuker",
  disabler = "Disabler",
  jungler = "Jungler",
  durable = "Durable",
  escape = "Escape",
  pusher = "Pusher",
  initiator = "Initiator",
}

export function getRoleName(role: Role): string {
  switch (role) {
    case Role.carry:
      return "ตัวแคร์รี";
    case Role.support:
      return "ตัวซัพพอร์ต";
    case Role.nuker:
      return "ตัวนูค";
    case Role.disabler:
      return "ตัวหยุด";
    case Role.jungler:
      return "ตัวป่า";
    case Role.durable:
      return "ตัวยืน";
    case Role.escape:
      return "ตัวหนี";
    case Role.pusher:
      return "ตัวดัน";
    case Role.initiator:
      return "ตัวเปิด";
    default:
      return "Unknown Role";
  }
}
