from PIL import Image

image = Image.open(r"D:\邦泰美工设计\其余\作品集网站\网站排版素材\首页排版参考.psd")
print(f"size={image.width}x{image.height}")
image.save(r"D:\邦泰美工设计\其余\作品集网站\psd-current-preview.png")
