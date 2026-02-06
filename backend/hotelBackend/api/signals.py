from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Order, Billing

@receiver(post_save, sender=Order)
def create_billing_for_completed_order(sender, instance, created, **kwargs):
    """
    Eğer Order tamamlandıysa (order_status=True),
    ve bu order için billing yoksa otomatik oluştur.
    """
    if instance.order_status:  # sipariş tamamlandıysa
        # Aynı order için Billing var mı kontrol et
        if not Billing.objects.filter(order=instance).exists():
            Billing.objects.create(
                order=instance,
                customer=instance.customer,
                staff=instance.staff,
                table=instance.table,
                total_amount=sum([item.item_price for item in instance.items.all()]),
                bill_status=True,
                bill_payment_status=False
            )
