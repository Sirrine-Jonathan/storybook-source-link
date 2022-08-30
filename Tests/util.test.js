import { getLinkFromParams } from '../stories/util'
import { PREFIX_PARAM_KEY, PARAM_KEY } from '../src/constants';
describe('util tests', () => {
    it('Should create a link from params object passed to story', () => {
        const params = {
            [PARAM_KEY]: 'link',
            [PREFIX_PARAM_KEY]: 'prefix'
        }
        expect(getLinkFromParams(params)).toEqual('prefix:link');
    })
    it('Should handle unidentified', () => {
        const params_no_link = {
            [PREFIX_PARAM_KEY]: 'prefix'
        }
        const params_no_prefix = {
            [PARAM_KEY]: 'link',
        }
        expect(getLinkFromParams(params_no_link)).toBeNull();
        expect(getLinkFromParams(params_no_prefix)).toEqual('link');
    })
    it('Should handle nulls', () => {
        const params_no_link = {
            [PREFIX_PARAM_KEY]: 'prefix',
            [PARAM_KEY]: null,
        }
        const params_no_prefix = {
            [PREFIX_PARAM_KEY]: null,
            [PARAM_KEY]: 'link',
        }
        expect(getLinkFromParams(params_no_link)).toBeNull();
        expect(getLinkFromParams(params_no_prefix)).toEqual('link');
    })
    it('Should handle empty params', () => {
        expect(getLinkFromParams({})).toBeNull();
        expect(getLinkFromParams()).toBeNull();
    })
})