from django.shortcuts import render

# Create your views here.
def mainpage(request):
    return render(request, 'main/mainpage.html')

def mtv(request):
    context = {
        'datas' : ['Model : 데이터 베이스에 저장되는 데이터를 의미!', 'Template :  사용자에게 보여지는 부분!', 'View: 요청에 따른 적절한 로직 수행!',  'URLconf: URL은 view와 template을 이어주는 역할을 하고, 이 부분을 만들어 주는 작업을 해줌!']
    }
    return render(request, 'mtv/mtv.html', context)

def about(request):
    return render(request, 'about/about.html')