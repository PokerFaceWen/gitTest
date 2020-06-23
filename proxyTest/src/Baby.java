public class Baby {
    public Proxy proxy;
    public void cry(){
        System.out.println("婴儿哭");
        this.proxy.cryListen();
    }
    public  void hunger(){
        System.out.println("婴儿饿");
        this.proxy.hungerListen();

    }
}
