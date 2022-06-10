const axios = require('../../createVatoms-2.0/node_modules/axios').default;
var qs = require('qs');
var _businessId = '';

const request = axios.create({
    headers: {
        "Accept":"*/*",
    }
});

const setBusinessId = (businessId) => {
    _businessId = businessId;
};

const setAccessToken = (accessToken) => {
    // console.log('setting axios bearer:'+JSON.stringify(accessToken));
    request.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
};
const vatomService = {
    getProfile: () => {
        return new Promise((resolve, reject) => {
            request.defaults.headers['content-type'] = 'application/json';
            request
                .get('https://id.vatominc.com/me')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.statusText);
                });
        });
    },
    refreshToken: (clientId, refreshToken) => {
        return new Promise((resolve, reject) => {
            var data = qs.stringify({
                'grant_type': 'refresh_token',
                'client_id': clientId,
                'refresh_token': refreshToken
            });
            request.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';
            request
                .post('https://id.vatominc.com/token',data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    getBusinesses: (clientId) => {
        return new Promise((resolve, reject) => {
            request.defaults.headers['content-type'] = 'application/json';
            request
                .get('https://studio.api.vatominc.com/u/'+clientId+'/roles')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    createDesign: (data) => {
        return new Promise((resolve, reject) => {
            request.defaults.headers['content-type'] = 'application/json';
            request
                .post('https://studio.api.vatominc.com/b/'+_businessId+'/object-definitions', data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    uploadFile: (formData) => {
        return new Promise((resolve, reject) => {
            var headerInfo = {
                headers: formData.getHeaders(),
            };
            request
                .post('https://resources.api.vatominc.com/b/'+_businessId+'/resources', formData, headerInfo)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    updateDesign: (objectDefinitionId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .patch('https://studio.api.vatominc.com/b/'+_businessId+'/object-definitions/'+objectDefinitionId, data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    // console.log('ERR updateDesign');
                    reject(err.response.data.errors);
                });
        });
    },
    createWizard: (userId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .post('https://studio.api.vatominc.com/u/'+userId+'/wizards', JSON.stringify(data))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    addDesignToWizard: (campaignId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .post('https://studio.api.vatominc.com/b/'+_businessId+'/campaigns/'+campaignId+'/object-definitions', JSON.stringify(data))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    createCampaign: (data) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .post('https://studio.api.vatominc.com/b/'+_businessId+'/campaigns/', JSON.stringify(data))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    addDesignToCampaign: (userId, campaignId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        var url = 'https://studio.api.vatominc.com/b/'+_businessId+'/campaigns/'+campaignId+'/object-definitions';
        var dataStringified = JSON.stringify(data);
        return new Promise((resolve, reject) => {
            //https://studio.api.vatominc.com/b/tniURVhvrF/campaigns/pxJz7iFU2B/object-definitions
            //https://studio.api.vatominc.com/b/tniURVhvrF/campaigns/pxJz7iFU2B/object-definitions
            //https://studio.api.vatominc.com/b/mtWlet3CDt/campaigns/l9a62Hr7Pm/object-definitions
            request
                .post(url, dataStringified)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    publishCampaign: (campaignGroupId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .patch('https://studio.api.vatominc.com/b/'+_businessId+'/campaign-groups/'+campaignGroupId, JSON.stringify(data))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    publishWizard: (campaignGroupId) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .post('https://studio.api.vatominc.com/b/'+_businessId+'/campaign-groups/'+campaignGroupId+'/wizard/publish')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    getCampaign: (campaignGroupId) => {
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .get('https://studio.api.vatominc.com/b/'+_businessId+'/campaign-groups/'+campaignGroupId)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    createDistribution: (campaignId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        var url = 'https://distribution.api.vatominc.com/b/' + _businessId + '/campaign-groups/' + campaignId + '/distributions';
        if (url === 'https://distribution.api.vatominc.com/b/tniURVhvrF/campaign-groups/fVRBUSYYUL/distributions'){
            console.log("CORRECT URL");
        }
        return new Promise((resolve, reject) => {
            request
                .post(url, JSON.stringify(data))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    sendDistribution: (distributionId) => {
        console.log('https://distribution.api.vatominc.com/b/' + _businessId + '/direct-distributions/' + distributionId + '/send');
        request.defaults.headers['content-type'] = 'application/json';
        return new Promise((resolve, reject) => {
            request
                .post('https://distribution.api.vatominc.com/b/'+_businessId+'/direct-distributions/'+ distributionId+'/send')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    },
    patchDistribution: (distributionId, data) => {
        request.defaults.headers['content-type'] = 'application/json';
        var dataStringified = JSON.stringify(data);
        console.log("URL:" + 'https://distribution.api.vatominc.com/b/'+_businessId+'/direct-distributions/'+distributionId)
        console.log('Data:' + dataStringified);
        return new Promise((resolve, reject) => {
            request
                .patch('https://distribution.api.vatominc.com/b/'+_businessId+'/direct-distributions/'+distributionId, dataStringified)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err.response.data.errors);
                });
        });
    }
};

module.exports = { setAccessToken:setAccessToken, setBusinessId:setBusinessId, vatomService:vatomService };