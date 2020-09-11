import request from '@/utils/request'
export function getContainer() {
  return request({
    url: '/api/cicontainers/',
    method: 'get',
  })
}
export function createContainer() {
  return request({
    url: '/api/cicontainers/',
    method: 'post',
  })
}
export function deleteContainer(id) {
  return request({
    url: '/api/cicontainers/'+id+'/',
    method: 'delete',
  })
}
export function buildImage(id,data) {
  return request({
    url: '/api/cicontainers/'+id+'/ci_build/',
    method: 'post',
    data
  })
}
export function getEcraddr() {
  return request({
    url: '/api/ecraddr',
    method: 'get',
  })
}
export function pushImage(id) {
  return request({
    url: '/api/cicontainers/'+id+'/ci_push/',
    method: 'post',
  })
}