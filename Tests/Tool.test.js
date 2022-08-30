import { getLink } from '../src/Tool'

describe('Tool tests', () => {
    it('should return prefix and link combined', () => {
        expect(getLink('prefix', 'link')).toEqual('prefixlink');
    })
    it('should return null given prefix and empty string as link', () => {
        expect(getLink('prefix', '')).toBeNull();
    })
    it('should return null given prefix and null as link', () => {
        expect(getLink('prefix', null)).toBeNull();
    })
    it('should return null given prefix and undefined as link', () => {
        expect(getLink('prefix', undefined)).toBeNull();
    })
    it('should return link without prefix given empty string as prefix', () => {
        expect(getLink('', 'link')).toEqual('link');
    })
    it('should return link without prefix given null as prefix', () => {
        expect(getLink(null, 'link')).toEqual('link');
    })
    it('should return link without prefix given undefined as prefix', () => {
        expect(getLink(undefined, 'link')).toEqual('link');
    })
    it('should return null given empty string for both', () => {
        expect(getLink('', '')).toBeNull()
    })
    it('should return null given null for prefix and empty string for link', () => {
        expect(getLink(null, '')).toBeNull();
    })
    it('should return null given empty string for prefix and null for link', () => {
        expect(getLink('', null)).toBeNull();
    })
    it('should return null given null for both', () => {
        expect(getLink(null, null)).toBeNull();
    })
    it('should return null given undefined for prefix and empty string for link', () => {
        expect(getLink(undefined, '')).toBeNull();
    })
    it('should return null given empty string for prefix and undefined for link', () => {
        expect(getLink('', undefined)).toBeNull();
    })
    it('should return null given undefined for both', () => {
        expect(getLink(undefined, undefined)).toBeNull();
    })
})