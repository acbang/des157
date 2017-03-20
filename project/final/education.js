var chart = c3.generate({
  bindto: '#chart',
  size: {
    width: 350
  },
  data: {
    columns: [
      ['Asian', 51],
      ['White', 33],
      ['Other', 32],
      ['Two of more races', 31],
      ['African American', 18],
      ['American Indian or Alaska Native', 14],
      ['Hispanic or Latino', 14]
    ],
    type: 'bar'
  },
});

function disaggEdu() {
  chart.load({
    columns: [
      ['Asian and Pacific Islander (Aggregate)', 51],
      ['Taiwanese', 74.5],
      ['Asian Indian', 73],
      ['Korean', 54],
      ['Chinese', 52],
      ['Japanese', 50],
      ['Filipino', 48],
      ['Thai', 44],
      ['Vietnamese', 29],
      ['Cambodian', 18],
      ['Hmong', 16]
    ],
    unload: chart.columns,
  });
}

function aggEdu() {
  chart.load({
    columns: [
      ['Asian', 51],
      ['White', 33],
      ['Other', 32],
      ['Two or more races', 31],
      ['African American', 18],
      ['American Indian or Alaska Native', 14],
      ['Hispanic or Latino', 14]
    ],
    unload: chart.columns,
  });
}
