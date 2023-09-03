1. To create service center
```
curl --request POST \
  --url http://localhost:8080/api/service-center \
  --header 'Content-Type: application/json' \
  --data '{
  "location": "Jaipur",
	"warehouseZone": "West"
}'
```
2. Create Spare part
```
curl --request POST \
  --url http://localhost:8080/api/spare-part \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
	"sku": "SP003",
	"name": "Charger",
	"price": 500
}'
```
3. Add Inventory

```agsl
curl --request POST \
  --url http://localhost:8080/api/add-inventory/2 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{
  "inventoryQuantityMap": {
    "SP001": 1,
    "SP002": 1,
    "SP003": 3
  }
}'
```

4. Create Job Sheet

```agsl
curl --request POST \
  --url http://localhost:8080/api/service-centers/create-job-sheet \
  --header 'Content-Type: application/json' \
  --data '{
  "customerName": "Yash",
  "deviceModel": "Model ABC",
  "issueDescription": "Speaker not on",
	"serviceCenter": {
    "centerId": 1
  },
  "date": "2023-09-02"
}'
```

5. Diagonise device
```agsl
curl --request PUT \
  --url http://localhost:8080/api/service-centers/diagnose-device/3 \
  --header 'Content-Type: application/json' \
  --data '{
	"SP001": 2,
	"SP002": 1,
	"SP003": 2
}'
```

6. Get all part requirement
```agsl
curl --request GET \
  --url 'http://localhost:8080/api/planning/part-requirements?date=2023-09-02' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7'
```

7. Prepare dispatch plan
```agsl
curl --request POST \
  --url 'http://localhost:8080/api/planning/prepare-dispatch-plan?date=2023-09-02' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7'
```