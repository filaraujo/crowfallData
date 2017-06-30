exports.power = {
  name: 'Aegis of Salvation',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'destroyer' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['aegis-of-salvation-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Attack causing 70 - 94 + 82% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/aegis-of-salvation.png'
};
