var chart2 = c3.generate({
  bindto: '#chart2',
  size: {
    width: 350
  },
  data: {
    columns: [
      ['Asian American or Pacific Islander', 74],
      ['White', 59],
      ['Other', 50],
      ['Two or more races', 50],
      ['Hispanic or Latino', 42],
      ['American Indian or Alaska Native', 35],
      ['Hispanic or Latino', 33]
    ],
    type: 'bar'
  },
});

function disaggIncome() {
  chart2.load({
    columns: [
      ['Asian American or Pacific Islander (Aggregate)', 74],
      ['Asian Indian', 100.5],
      ['Filipino', 83],
      ['Taiwanese', 82],
      ['Japanese', 74],
      ['Chinese', 71],
      ['Guamanian or Chamorro', 57],
      ['Korean', 55],
      ['Vietnamese', 55],
      ['Cambodian', 54],
      ['Hmong', 49],
      ['Burmese', 36],
      ['Other Micronesian', 30]
    ],
    unload: chart2.columns,
  });
}

function aggIncome() {
  chart2.load({
    columns: [
      ['Asian', 51],
      ['White', 33],
      ['Other', 32],
      ['Two of more races', 31],
      ['African American', 18],
      ['American Indian or Alaska Native', 14],
      ['Hispanic or Latino', 14]
    ],
    unload: chart2.columns,
  });
}
