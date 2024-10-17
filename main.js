import QRCode from 'qrcode-svg'

export default {
  fetch: async (request, env) => {
    const url = new URL(request.url)
    const defaultSize = 256
    const param = url.searchParams
    const data = param.get("data")
    const color = param.get("color")
    const bg = param.get("bg")
    const size = param.get("size")
    const padding = param.get("padding")
    const level = param.get("level")
    const qr = new QRCode({
      content: data || 'https://hamm.cn',
      width: size || defaultSize,
      height: size || defaultSize,
      padding: padding || 2,
      ecl: level || 'H',
      color: color || '#000',
      background: bg || '#fff',
      join: true,
    })
    return new Response(qr.svg(), { headers: { 'Content-Type': 'image/svg+xml' } })
  }
}
