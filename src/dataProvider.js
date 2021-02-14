// Visit https://marmelab.com/react-admin/DataProviders.html for more info

const dataProvider = {
  getList: (resource, param) => {
    return fetch(`http://hapi.fhir.org/baseR4/${resource}?_format=json`)
      .then((data) => data.json())
      .then((data) => {
        const response = { data: data['entry'].map((elm) => elm.resource), total: data['total'] || 1000 };
        console.log('response: ', response);
        return response;
      })
      .catch((err) => err);
  },

  getOne: (resource, param) => {
    return fetch(`http://hapi.fhir.org/baseR4/${resource}/${param.id}?_format=json`)
      .then((data) => data.json())
      .then((data) => {
        const response = { data: data };
        return response;
      });
  },

  update: (resource, param) => {
    return fetch(`http://hapi.fhir.org/baseR4/${resource}/${param.id}?_format=json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
      },
      body: JSON.stringify(param.data),
    });
  },
};

export default dataProvider;
